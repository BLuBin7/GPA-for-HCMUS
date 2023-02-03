let table = document.getElementById("tbDiemThiGK"), totalCredit = 0, totalMark = 0;;

for (i = 1, row = null; row = table.rows[i]; i++) 
{
    if (row !== undefined)
    {
        const subjectName = row.cells[1].innerText;
        if (subjectName.includes("Thể dục") || subjectName.includes("Anh văn") || subjectName.includes("Giáo dục quốc phòng") 
			|| subjectName.includes("Tin học"))
            {
                continue;
            }
            
        if (row.cells[5].innerText == "" || row.cells[5].innerText == "Vắng") continue;
		if (parseFloat(row.cells[5].innerText) < 5) continue;
        
        const credit = parseInt(row.cells[2].innerText);
        totalCredit += credit
        totalMark += parseFloat(row.cells[5].innerText) * credit;
    }
}
let ans = totalMark * 1.0 / totalCredit;
console.log(`-> Tổng số chỉ : ${totalCredit}`);
console.log(`-> GPA: ${ans}`);
round = ans.toFixed(2);

if(round >=9 && round < 10) console.log(`Điểm sau khi làm tròn : ${round} ->Xuất Sắc`);
else if(round >=8 && round <9) console.log(`Điểm sau khi làm tròn : ${round} -> Giỏi`);
else if (round >=7 && round <8) console.log(`Điểm sau khi làm tròn : ${round} -> Khá`);
else if(round>=6 && round <7) console.log(`Điểm sau khi làm tròn : ${round} -> Trung Bình Khá`);
else console.log(`Điểm sau khi làm tròn : ${round} -> Trung Bình`);
