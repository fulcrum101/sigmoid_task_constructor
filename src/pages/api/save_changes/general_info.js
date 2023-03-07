export default async function handler(req, res) {
    const task = JSON.parse(req.body);
    const dir_path = './data/tasks/' + task.code;

    const fs = require('fs');
    let completed = false;
    // TODO Proper error handling editing problem.toml
    try {
        fs.writeFileSync(dir_path + '/problem.toml',
            `code = "${task.code}"\nname = "${task.name}"\nversion = ${task.version}\n\nauthor = "${task.author}"\ntags = ${JSON.stringify(task.tags)}\n\ntype = "${task.type}"\ntime_lim= ${task.time_lim}\nmem_lim = ${task.mem_lim}`);
        completed = true;
    } catch (error){
        console.log(error);
    }
    return res.status(200).json({completed : completed});
}
