import { Router, Request, Response } from "express";
import getPlacesHandler from "../logic/palces/getPlaceHandler";

const placeRouter = Router();

placeRouter.get("/:id", async (req: Request, res: Response) => {
  console.log("req.params.name" + req);
  //Basic Permission check
  //Basic param check

  const respJSON = await getPlacesHandler();
  res.json(respJSON);
});

export default placeRouter;
