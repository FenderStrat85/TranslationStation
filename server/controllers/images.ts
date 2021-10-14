import { Request, Response } from 'express';
import db from '../models/db';

const getImageUrl = async (req: Request, res: Response) => {
  const { jobId } = req.params;
  try {
    const { imageUrl } = await db.Image.findOne({
      where: { JobId: jobId },
    });
    res.status(201).send({ imageUrl });
  } catch (error) {
    res
      .status(404)
      .send({ error: '404', message: 'Not able to retrieve the image' });
  }
};

const uploadTranslatedImageUrl = async (req: Request, res: Response) => {
  const { url } = req.body;
  const { jobId } = req.params;
  try {
    const image = await db.Image.findOne({ where: { JobId: jobId } });
    image.imageUrlTranslate = url;
    await image.save();
    res.status(200).send(image);
  } catch (error) {
    res
      .status(404)
      .send({ error: '404', message: 'Not able to upload the image' });
  }
};

const uploadTranslatedTextOfImage = async (req: Request, res: Response) => {
  const { text } = req.body;
  const { jobId } = req.params;
  try {
    const image = await db.Image.findOne({ where: { JobId: jobId } });
    image.translatedText = text;
    await image.save();
    res.status(200).send(image);
  } catch (error) {
    res.status(404).send({ error: '404', message: 'Not able to add the text' });
  }
};

module.exports = {
  getImageUrl,
  uploadTranslatedImageUrl,
  uploadTranslatedTextOfImage,
};
