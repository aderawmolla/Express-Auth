
const bcrypt = require("bcrypt")
const model = require("../models/index")
const { Op } = require('sequelize');

const create = (req, res) => {
    const { username, password, email } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    if (!username || !email || !password) {
        res.send("Please give all credentials")
    }
    else {
        const user = {
            username: username,
            password: hashedPassword,
            email: email
        }
        model.User.create(user).then((data) => {
            res.status(200).send(data)

        }).catch((error) => {
            console.log("Error happened", error)

        })
    }

}

const update = (req, res) => {
    const data = req.body
    const id = req.params.id
    model.User.update(data, {
        where: { id: id }
    }).then((data) => {
        console.log("this is the user to be updated")
        res.send(data)
    }).catch((error) => {
        console.log(error)
        res.send("There is error happened")
    })

}

const getAll = (req, res) => {
    model.User.findAll({ where: {} }).then((data) => {
        res.send({ "users": data })
    }).catch((error) => {
        console.log("error happened", error)
    })


}
const getUser = (req, res) => {
    const id = req.params.id
    model.User.findByPk(id)
        .then((data) => {
            res.send(data)
        }).catch((error) => {
            res.send("Some Error occured")
        })

}

const deleteUser = (req, res) => {
    const id = req.params.id
    model.User.destroy({ where: { id: id } }).then((data) => {
        console.log("data after delete", data)
        res.send("Delete Successful")
    }).catch((error) => {
        res.status(404).send("User not exist")
    })
}


const filterUsers = (req, res) => {
  let searchTerm = req.query.username;

  if (!searchTerm) {
    return res.status(400).send({ error: "Username query parameter is required" });
  }
  searchTerm = searchTerm.toLowerCase();
  model.User.findAll({
    where: {
      username: {
        [Op.like]: `%${searchTerm}%`
      }
    }
  })
    .then((filteredUsers) => {
      res.send({ users: filteredUsers });
    })
    .catch((error) => {
      console.log(`Error fetching users: ${error}`);
      res.status(500).send({ error: "Error" });
    });
};


module.exports = {create, update, getAll, getUser, deleteUser,filterUsers}