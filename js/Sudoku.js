let Sudoku = {
    matrixBlock: [],
    matrixLine: [],
    matrixCol: [],
    readBlock: function () {
        for (let i = 0; i < 9; i++) {
            let str = [];
            for (let j = 0; j < 9; j++) {
                if ($(".block_" + (i + 1))[j].value === "") {
                    str[j] = "";
                }
                else {
                    str[j] = $(".block_" + (i + 1))[j].value;
                }
            }
            Sudoku.matrixBlock[i] = str;
        }
        console.log(Sudoku.matrixBlock);
    },
    readLine: function () {
        for (let i = 0; i < 9; i++) {
            let str = [];
            for (let j = 0; j < 9; j++) {
                if ($(".line_" + (i + 1))[j].value === "") {
                    str[j] = "";
                }
                else {
                    str[j] = $(".line_" + (i + 1))[j].value;
                }
            }
            Sudoku.matrixLine[i] = str;
        }
        console.log(Sudoku.matrixLine);
    },
    readCol: function () {
        for (let i = 0; i < 9; i++) {
            let str = [];
            for (let j = 0; j < 9; j++) {
                if ($(".col_" + (i + 1))[j].value === "") {
                    str[j] = "";
                }
                else {
                    str[j] = $(".col_" + (i + 1))[j].value;
                }
            }
            Sudoku.matrixCol[i] = str;
        }
        console.log(Sudoku.matrixCol);
    },
    loadEvent: function () {
        $(".read").click(function () {
            Sudoku.readBlock();
            Sudoku.readLine();
            Sudoku.readCol();
            console.log(Sudoku.maxLengthElement(Sudoku.arrMaxLengthElement(Sudoku.matrixBlock), "block"));
            console.log(Sudoku.maxLengthElement(Sudoku.arrMaxLengthElement(Sudoku.matrixLine), "line"));
            console.log(Sudoku.maxLengthElement(Sudoku.arrMaxLengthElement(Sudoku.matrixCol), "col"));
        })
    },
    searchDecision: function () {
        let block = Sudoku.maxLengthElement(Sudoku.arrMaxLengthElement(Sudoku.matrixBlock), "block");
        let line = Sudoku.maxLengthElement(Sudoku.arrMaxLengthElement(Sudoku.matrixLine), "line");
        let col = Sudoku.maxLengthElement(Sudoku.arrMaxLengthElement(Sudoku.matrixCol), "col");
        let res = {};
        if (block.item >= line.item && block.item >= col.item) {
            res = block;
        }
        else if (line.item >= col.item) {
            res = line;
        }
        else {
            res = col;
        }
        Sudoku.info.elem = res.elem;
        switch (Sudoku.info.elem) {
            case "block":
                Sudoku.info.block = res.i;
                break;
            case "line":
                Sudoku.info.line = res.i;
                break;
            case "col":
                Sudoku.info.col = res.i;
                break;
            default:
                break;
        }
    },
    maxLengthElement: function (arr, elem) {
        let obj = {};
        obj.item = 0;
        obj.elem = elem;
        for (let i = 0; i < 9; i++) {
            if (arr[i] >= obj.item) {
                obj.item = arr[i];
                obj.i = i;
            }
        }
        return obj;
    },
    arrMaxLengthElement: function (arr) {
        let mass = [];
        for (let i = 0; i < 9; i++) {
            let str = 0;
            for (let j = 0; j < 9; j++) {
                if (arr[i][j] !== "") {
                    str++;
                }
            }
            mass[i] = str;
        }
        return mass;
    },
    testBlockMatrix: [
        ["5", "", "", "", "1", "", "9", "", "2"],
        ["", "", "", "", "", "2", "1", "", ""],
        ["", "", "6", "", "9", "", "7", "", ""],
        ["", "7", "9", "3", "", "", "1", "", ""],
        ["", "4", "", "", "", "7", "", "5", "9"],
        ["5", "", "8", "", "4", "9", "3", "", "2"],
        ["", "2", "7", "4", "9", "", "6", "3", ""],
        ["3", "9", "5", "7", "", "1", "4", "2", ""],
        ["4", "", "", "2", "8", "", "9", "5", ""],
    ],
    testLoad: function () {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                $(".block_" + (i + 1))[j].value = Sudoku.testBlockMatrix[i][j];
            }
        }
    },
    info:{
        elem:"none",
        block:0,
        line:0,
        col:0,
        tick:0
    }
};
