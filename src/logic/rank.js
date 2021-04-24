
const findRank= (competitive,submit,accept)=>{
    let comPer=competitive["Data Structures"]+competitive["Algorithms"]+competitive["C++"]+competitive["Java"]+
    competitive["Python"]+competitive["HTML"]+competitive["Javascript"];
    return  ((comPer/7)+(accept/submit)*100)/2;
}

const getRankingOrder=(hackers)=>{
    return hackers.sort((a,b)=>{
        let first=findRank(a["Competitive Percentile"],a["Solutions submitted"],a["Solution accepted"]);
        let second=findRank(b["Competitive Percentile"],b["Solutions submitted"],b["Solution accepted"]);
       if(first>second){
           return 1;
       }else if(first<second){
            return -1;
       }else{
           return 0;
       }
    })
}

module.exports=getRankingOrder;