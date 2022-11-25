let result = [];
const generateController = {
    triangle: (req, res, next) => {
        const {value} = req?.body

        if(value) {
            if(Number.isInteger(parseInt(value))) {
                let json = [];
                let zero = '';

                for(let i = 0; i < [...value].length; i++) {
                    zero += '0';
                    json = [...json, value[i] + zero];
                }

                result = {
                    success: true,
                    message: `Berhasil generate bilangan segitiga dari bilangan ${value}`,
                    data: json
                }
            }
            else {
                result = {
                    success: false,
                    message: "Value yang Anda masukkan bukan angka",
                    data: {}
                }
            }
        }
        else {
            result = {
                success: false,
                message: "Masukan value terlebih dahulu",
                data: {}
            }
        }
        console.log(result);
        res.status(200);
        res.send(result);
    },
    odd: (req, res, next) => {
        const {value} = req?.body
        if(value) {
            if(Number.isInteger(parseInt(value))) {
                let json = [];

                for(let i = 0; i <= value; i++) {
                    if(i % 2 === 1) {
                        json = [...json, i];
                    }
                }

                result = {
                    success: true,
                    message: `Berhasil generate bilangan ganjil dari bilangan ${value}`,
                    data: json
                }
            }
            else {
                result = {
                    success: false,
                    message: "Value yang Anda masukkan bukan angka",
                    data: {}
                }
            }
        }
        else {
            result = {
                success: false,
                message: "Masukan value terlebih dahulu",
                data: {}
            }
        }
        res.status(200);
        res.send(result);
    },
    prime: (req, res, next) => {
        const {value} = req?.body

        if(value) {
            if(Number.isInteger(parseInt(value))) {
                let json = [];
                const max = parseInt(value);

                    // for (let i = 2; i < max; i++) {
                    //     if (max % i !== 0) {
                    //         json = [...json, i];
                    //     }
                    // }

                result = {
                    success: true,
                    message: `Berhasil generate bilangan prima dari bilangan ${value}`,
                    data: json
                }
            }
            else {
                result = {
                    success: false,
                    message: "Value yang Anda masukkan bukan angka",
                    data: {}
                }
            }
        }
        else {
            result = {
                success: false,
                message: "Masukan value terlebih dahulu",
                data: {}
            }
        }
        res.status(200);
        res.send(result);
    }
}

module.exports = generateController;
