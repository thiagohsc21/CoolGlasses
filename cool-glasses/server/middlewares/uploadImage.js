const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './src/assets/imagens')
        },
        filename: (req, file, cb) => {
            const data = new Date();
            var dia     = data.getDate();
            var mes     = data.getMonth();
            var ano4    = data.getFullYear();
            var str_data = dia + '-' + (mes+1) + '-' + ano4;

            var hora    = data.getHours();          // 0-23
            var min     = data.getMinutes();        // 0-59
            var seg     = data.getSeconds();        // 0-59
            var str_hora = hora + '-' + min + '-' + seg;

            cb(null, str_data+"_"+str_hora+"_"+file.originalname)  
        }
    }),
    fileFilter: (req, file, cb) => {
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);

        if(extensaoImg){
            return cb(null, true);
        }

        return cb(null, false);
    }
}));