const AWS = require('aws-sdk');

AWS.config.update({
    "region": "eu-west-1",
    "endpoint": "http://localhost:8000"
});

let docClient = new AWS.DynamoDB.DocumentClient();

async function GetCount(req, res) {   
    const params = {
        TableName: "counters",
        Key: {
            "name": "clicks"
        }
    };

    let result;
    try {
        console.log("get")
        result = await docClient.get(params).promise();
    }
    catch (e) {
        console.log(`error getting count ${e}`);
    }

    res.writeHead(200, { 
        'Content-Type': 'application/json',  
        'Access-Control-Allow-Origin': '*' 
    });
    
    res.end(JSON.stringify(result.Item.count));  
}

module.exports = {
    GetCount
}
