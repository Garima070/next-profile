console.log( 'this is a project 5');
const data=[
    {
        name:'rohan das',
        age:18,
        city:'kolkata',
        language:'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/75.jpg'
    },
    {
        name:'garima rajpoot',
        age:19,
        city:'kolkata',
        language:'c',
        framework:'Flask',
        image:'https://randomuser.me/api/portraits/med/men/76.jpg'
    },
    {
        name:'pragya singh',
        age:20,
        city:'kolkata',
        language:'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/77.jpg'
    },
    {
        name:'anshika gupta',
        age:32,
        city:'kolkata',
        language:'c++',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/78.jpg'
    },
    {
        name:'yashkant bajpai',
        age:25,
        city:'kolkata',
        language:'java',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/79.jpg'
    },
    {
        name:'shahid khan',
        age:25,
        city:'kolkata',
        language:'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/80.jpg'
    },
]

//CV iterator

function cviterator(profiles){
    let nextindex=0
    return{
        next:function(){
            return nextindex<profiles.length?
               {value:profiles[nextindex++],done:false}:
               { done:true}
        }
    }
}

//button listener for next button

const next=document.getElementById('next')
next.addEventListener('click',nextcv)
const candidates=cviterator(data)
nextcv()
function nextcv(){
    const currentcandidates=candidates.next().value
    let image=document.getElementById('image')
    let profile=document.getElementById('profile')
    if(currentcandidates!=undefined)
    {
    image.innerHTML=`<img src=${currentcandidates.image}>`
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name : ${currentcandidates.name}</li>
    <li class="list-group-item">Age : ${currentcandidates.age}</li>
    <li class="list-group-item">Lives in ${currentcandidates.city}</li>
    <li class="list-group-item">Primarily works in ${currentcandidates.language}</li>
    <li class="list-group-item">uses ${currentcandidates.framework}</li>
    
  </ul>`
    }
    else{
        alert('End of the applications')
        window.location.reload()
    }
}

