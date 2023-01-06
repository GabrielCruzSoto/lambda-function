import { APIGatewayEvent, APIGatewayProxyResultV2, Context } from "aws-lambda";
import {MessageUtils} from "lambda-layer"


export const lambdaHandler = async(event:APIGatewayEvent, context: Context):Promise<APIGatewayProxyResultV2>=>{
    let message: MessageUtils = new MessageUtils();
    return{
        statusCode:200,
        body:"OK"
    }
}