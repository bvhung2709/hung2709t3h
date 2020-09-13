var my_table = "<table width='100%'>";
var row = 0;
var col;
var list = [
    ["Vương", "lesson1", "", "lesson3", ""],
    ["Long", "", "lesson2", "", "lesson4"],
    ["Giang", "lesson1", "", "", "lesson4"],
    ["Hưng", "lesson1", "lesson2", "lesson3", ""],
    ["Hiếu", "lesson1", "", "lesson3", "lesson4"],
    ["Giang", "", "giang_link2", "lesson3", ""],
];
var myWindow;

function displaytable() {
    var my_table = rendertable(list);
    document.getElementById('demo').innerHTML = my_table;
}

function ordertable() {
    var orderlist = [...list];
    orderlist.sort();

    var my_table = rendertable(orderlist);

    document.getElementById('demo').innerHTML = my_table;
}

function rendertable(orderlist) {
    var my_table = "<table id='mytable'>";
    var row = 0;
    var col;
    for (row = 0; row < orderlist.length; row++) {
        my_table += "<tr>";

        for (col = 0; col < orderlist[row].length; col++) {
            my_table += "<td>" + orderlist[row][col] + "</td>";
        }

        my_table += "</tr>";
    }

    my_table += "</table>";

    return my_table;
}

function input() {
    window.open("https://www.facebook.com/dungpuma2709");
}

function openWin() {
    myWindow = window.open("https://www.facebook.com/dungpuma2709", "width=800, height=400");
}

function closeWin() {
    myWindow.close();
}

function thongke() {
    var a = [];
    var b = [];
    my_table = "<table id ='mytable'>";
    for (var i = 0; i < list.length; i++) {
        b[i] = 0;
        for (var j = 0; j < list[0].length; j++) {
            var td = list[i][j];
            if (td == "") {
                a[j] = 0;
            } else {
                a[j] = 1;
            }
            b[i] += a[j];
        }
        b[i] -= 1;

        my_table += "<tr>";
        my_table += "<td>" + list[i][0] + "</td>";
        my_table +=
            "<td>" + "Đã làm" + " " + b[i] + " " + "bài tập về nhà" + "</td>";
        my_table += "</tr>";
    }
    my_table += "</table>";
    document.getElementById("demo").innerHTML = my_table;
}

function timkiem() {
    var input = document.getElementById("search").value.toUpperCase();
    var table = document.getElementById("mytable");
    var tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];
        var text = td.innerHTML;
        if (text.toUpperCase().indexOf(input) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

function reset() {
    document.getElementById("demo").innerHTML = "";
}
