import { doImage, doPosting } from '../../doApi';

export const deletePosting = async ({ boardType, id, imagesUrl, dispatch }) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });

  try {
    await doPosting.delete(boardType, id);
    imagesUrl.length > 0 && (await doImage.delete(imagesUrl));
  } catch (e) {
    console.error(e);
  }

  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};
