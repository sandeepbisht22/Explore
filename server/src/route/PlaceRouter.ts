import { Router, Request, Response } from "express";
import getPlacesHandler from "../logic/palces/getPlaceHandler";

const placeRouter = Router();

placeRouter.get("city/:id", async (req: Request, res: Response) => {
  //Basic Permission check
  //Basic param check

  const respJSON = await getPlacesHandler();
  res.json(respJSON);
});

placeRouter.get("state/all/:id", async (req: Request, res: Response) => {
  //Basic Permission check
  //Basic param check

  const respJSON = await getPlacesHandler();
  res.json(respJSON);
});

export default placeRouter;
