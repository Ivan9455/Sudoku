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
        })
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
    }
};
