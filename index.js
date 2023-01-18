let count =0
let name ="Hawaa!"
let greating ="Welcome back  "
let greatingEl =document.getElementById("welcome-el")
let saveEL =document.getElementById("save-el")
function increment(){
count += 1
document.getElementById('count').innerText =count

}
function save()
{
  if (saveEL.innerText =="Previous entries")
  {
    saveEL.textContent +=" "+count
  }
  else {
    saveEL.textContent +=" - "+count
  }
  count =0
  document.getElementById('count').innerText =count
}
function display()
{
greatingEl.innerText= greating + name
}
display()
