class Contestant{
    constructor(){
    this.name = null
    }
    getCount(){
        var contestantCountRef = database.ref("contestantCount");
        contestantCountRef.on("value", function(data){
            contestantCount = data.val();

        })

    }
    updateCount(){
        database.ref("/").update({
           contestantCount: contestant
        })

        
    }
    update(){
        var contestantIndex = contestant
        database.ref(contestantIndex).set({
            name : this.name
            
            
        })
    }
    
}