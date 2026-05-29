// const teamMembers = [
//   {
//     name: "Alex Morgan",
//     age: 18,
//     profession: "Software Engineer",
//   },
//   {
//     name: "brian chen",
//     age: 34,
//     profession: "Data Analyst",
//   },
//   {
//     name: "Elena Rostova",
//     age: 41,
//     profession: "Project Manager",
//   },
//   {
//     name: "Marcus Vance",
//     age: 15,
//     profession: "UX/UI Designer",
//   },
//   {
//     name: "Aisha Diop",
//     age: 31,
//     profession: "DevOps Engineer",
//   },
// ];

//   const extractName = teamMembers.map((item , index)=>{
//     return item.name
//   })
// console.log(extractName);


// teamMembers.forEach((item , index)=>{
//    console.log(item.name)
//   })

// let nums = [1, 2, 3, 4, 5, 6];

// let even = nums.filter(num => num % 2 === 0);

// console.log(even);


const webUsers = [
    { id: 101, name: "Ali", role: "student", isPremium: true, spent: 1500 },
    { id: 102, name: "Sara", role: "developer", isPremium: false, spent: 0 },
    { id: 103, name: "Zain", role: "developer", isPremium: true, spent: 4500 },
    { id: 104, name: "Ayesha", role: "student", isPremium: false, spent: 800 }
];

const premiumUsers = webUsers.filter(user => user.isPremium === true);

console.log(premiumUsers);

const notifications = webUsers.map(user => `Assalam-o-Alaikum ${user.name}, welcome back to your ${user.role} dashboard!`);

console.log(notifications);


webUsers.forEach((uesr,index) =>{
   console.log(`User no : ${index +1} ${uesr.name} (${uesr.role})`);
   
})
