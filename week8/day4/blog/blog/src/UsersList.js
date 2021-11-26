
import Card from 'react-bootstrap/Card'


const UsersList = (props)=>{
    const {post} = props
 
    
return(
    <>
    {post.map(item =>{  
   return   <Card key ={item.id} style={{ width: '18rem' }}>
        <Card.Body >
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
         {item.username}
          </Card.Text>
          
        </Card.Body>
      </Card>


 




    })}
    </>
)

}

export default UsersList