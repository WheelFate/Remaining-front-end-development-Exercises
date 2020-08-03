// Get modal element
var modal=document.getElementById('simpleModal');
// Get open modal button
var modalBtn=document.getElementById('modalBtn');
// Get close button
var closeBtn=document.getElementsByClassName('closeBtn')[0];
// Listen for open click
modalBtn.addEventListener('click',openModal);
// Listen for close click
closeBtn.addEventListener('click',closeModal);
// Listen for outside click
window.addEventListener('click',outsideClick);
// Function to open Modal
function openModal(){
modal.style.display='block';
}
// Function to close Modal
function closeModal(){
modal.style.display='none';
}
// Function to close Modal if outside click
function outsideClick(e){
    if(e.target == modal){
    modal.style.display='none';   
    }
}