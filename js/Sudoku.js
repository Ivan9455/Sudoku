let Sudoku = {
    matrixBlock: [],
    matrixLine: [],
    read: function () {
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
    loadEvent: function () {
        $(".read").click(function () {
            Sudoku.read();
        })
    }
};