import { Router } from "express";
import { postAIMessage } from "../handlers/messageAPI";

const route = Router();

route.post('/', postAIMessage);

export default route;