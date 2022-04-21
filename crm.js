filyallar [
 { filyal_id: 3, filyal_name: "chilonzor" },
 { filyal_id: 2, filyal_name: "hadra" },
 { filyal_id: 1, filyal_name: "chimboy" }
]

grops [
    { filyal_id: 1, teacher_id: 1, grop_id: 1, grop_name: 'nodejs'},
    { filyal_id: 2, teacher_id: 2, grop_id: 2, grop_name: 'fulstek'},
    { filyal_id: 3, teacher_id: 3, grop_id: 3, grop_name: 'frontent'},
    { filyal_id: 2, teacher_id: 1, grop_id: 4, grop_name: '.net'},
    { filyal_id: 1, teacher_id: 6, grop_id: 5, grop_name: 'flater'},
    { filyal_id: 3, teacher_id: 3, grop_id: 6, grop_name: 'foundation'}
]

teacher [
    {  teacher_id: 3, teacher_name: 'Muhamadhusayn Olimjonov'},
    { teacher_id: 1, teacher_name: 'Alisher Qosimov'},
    { teacher_id: 2, teacher_name: 'Musayev Xusan'}
]

student [
    { baho_id: 1, grop_id: 1, student_id: 1, student_name: 'Ibrohim'},
    { baho_id: 2, grop_id: 3, student_id: 2, student_name: 'mamaraym'},
    { baho_id: 3, grop_id: 4, student_id: 3, student_name: 'hikmat'},
    { baho_id: 4, grop_id: 2, student_id: 4, student_name: 'Alisher'},
    { baho_id: 5, grop_id: 6, student_id: 5, student_name: 'Abdullo'},
    { baho_id: 6, grop_id: 6, student_id: 5, student_name: 'Xayrullo'}
]

baho [
    { baho_id: 6, baho: '5'},
    { baho_id: 5, baho: '4'},
    { baho_id: 4, baho: '3'},
    { baho_id: 3, baho: '2'},
    { baho_id: 2, baho: '1'},
    { baho_id: 1, baho: '0'}
]

davomat [
    { student_id: 1, teacher_id: 2, date: "03-07-2023", kel_kem: 'true'},
    { student_id: 2, teacher_id: 5, date: "03-07-2023", kel_kem: 'false'},
    { student_id: 3, teacher_id: 4, date: "03-07-2023", kel_kem: 'true'},
    { student_id: 4, teacher_id: 1, date: "03-07-2023", kel_kem: 'false'},
    { student_id: 5, teacher_id: 3, date: "03-07-2023", kel_kem: 'true'}
]