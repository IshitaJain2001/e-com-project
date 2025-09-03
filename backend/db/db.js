const connection=()=>{
    mongoose.connect()
    .then(()=>{
        console.log("mongodb connected ");
        
    })
}

export default connection