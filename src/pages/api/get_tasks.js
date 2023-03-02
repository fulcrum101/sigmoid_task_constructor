export default function handler(req, res) {
    const fs = require('fs');
    const dir_tasks = fs.opendirSync('./data/tasks');
    let dirent;
    let files = [];
    while ((dirent = dir_tasks.readSync()) !== null){
        const stats = fs.statSync('./data/tasks/' + dirent.name);
        files.push({codename: dirent.name, last_modified: stats.mtime});
    }
    dir_tasks.closeSync();
    // console.log('API: ', files);
    // Sort files by last_modified
    files.sort(function(a, b){
        const keyA = a.last_modified;
        const keyB = b.last_modified;
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    });
    return res.status(200).json({files: files});
}