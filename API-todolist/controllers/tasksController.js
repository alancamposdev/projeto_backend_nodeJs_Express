const Tasks = require('../models/tasksFile.json');


// Modulo FS para ler e escrever arquivos
const fs = require('fs');
const path = require('path');
const tasksPath = path.join(__dirname, '..', './models', 'tasksFile.json');

// Mostrar um arquivo HTML
const index = (req, res) => {

  const homePath = path.join(__dirname, '..', './views', 'home.html');

  fs.readFile(homePath, 'utf-8', (err, HTML) => {
    res.end(HTML);
    if (err) {
      res.status(500).json({
        msg: err
      });
    }
  });
}


// Mostrar um arquivo JSON com as tarefas
const showTask = (req, res) => {

  fs.readFile(tasksPath, (err, data) => {
    if (err) {
      res.status(500).json({
        msg: "Erro ao ler o arquivo de tarefas"
      });
    }
    const tasks = JSON.parse(data);
    res.json(tasks);
  });
}

// Criar uma tarefa no arquivo JSON
const createTask = (req, res) => {
  try {

    const task = req.body.task;
    const newTask = {
      id: Tasks.length + 1,
      task,
      status: 'pendente',
      created: new Date(Date.now()).toUTCString()
    }

    Tasks.push(newTask);

    fs.writeFile(tasksPath, JSON.stringify(Tasks), (err) => {
      if (err) {
        res.status(500).json({
          msg: "Erro ao gravar a tarefa no arquivo"
        });
      }
    }
    );

    res.status(201).json({ msg: 'Tarefa criada com sucesso', Tasks });

  } catch (err) {
    res.status(500).json({
      msg: "Erro ao criar uma tarefa: " + err
    });
  }

}

// Atualizar uma tarefa no arquivo JSON
const updateTask = (req, res) => {
  //
  try {

    const id = req.params.id;    
    const task = Tasks.findIndex(task => task.id == id);

    if(task === -1){
      return res.status(404).json({
        msg: "Tarefa não encontrada"
      });
    }

    Tasks[task] = { ...Tasks[task], ...req.body };

    fs.writeFile(tasksPath, JSON.stringify(Tasks), (err) => {
      if (err) {
        res.status(500).json({
          msg: "Erro ao atualizar a tarefa no arquivo"
        });
      }
    }); 

    res.status(200).json({
      msg: 'Tarefa atualizada com sucesso',
      Tasks
    });

  } catch (err) {
    res.status(500).json({
      msg: "Erro ao atualizar uma tarefa: " + err
    });
  }
}

// Deletar uma tarefa do arquivo JSON
const deleteTask = (req, res) => {
  try{

    const id = req.params.id;
    const task = Tasks.findIndex(task => task.id == id);

    if(task === -1){
      return res.status(404).json({
        msg: "Tarefa não encontrada"
      });
    }

    Tasks.splice(task, 1);
    fs.writeFile(tasksPath, JSON.stringify(Tasks), (err) => {
      if (err) {
        res.status(500).json({
          msg: "Erro ao deletar a tarefa no arquivo"
        });
      }
    }); 
    
    res.status(200).json({
      msg: 'Tarefa deletada com sucesso',
      Tasks
    });


  }catch(err){
    res.status(500).json({
      msg: "Erro ao deletar uma tarefa: " + err
    });
  }

}

module.exports = {
  index,
  showTask,
  createTask,
  updateTask,
  deleteTask
};