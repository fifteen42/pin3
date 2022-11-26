import { Response } from "express";
import { db } from "./config/firebase";
const Arweave = require('arweave');
// import 'dotenv/config';

const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
});

type Bookmark = {
    url: string,
    title: string,
    description: string,
    tags: string[]
}

type Request = {
    body: Bookmark,
    params: { bookMarkId: string }
}

const addBookmark = async (req: Request, res: Response) => {
    const { url, title, description, tags} = req.body;
    try {
      // onchain
      const bookmarkDataOnchain = {
        url, 
        title, 
        description, 
        tags,
      };

      const bookmarkDataOnchainStr = JSON.stringify(bookmarkDataOnchain);

      let key = {"d":"Z3GMnpzzb5J_J1qhE4HwujDLt_Yzz8OdzLBTmLGYSzHVY9NENvJQzFKI1EkLBHVdycKXPU8SfWEhdrmCUiLk7zFPofgDEkzRG-9b8U-sCXf6XyZOSrmykJf8eFD4vuoH7S48lpeIqssohji1hS6EzPrOWKiUYyZiVVCtVKBSB2afiVtje0cgDOVnXQkbIBQH182CIHb3kl2uf4G3eO9YMdrBaSSEkBpyNGBcopQFmXSO6dpNSzf7L9bmQpwkvjjlASPHZJK4Q1JlDVmqTUVtj3mbpdEUwCujcZidMzDzg-np95UvwYhzIRN7HFRvbAl4SzqQll394fgj-SURrCwTdlvuCwBRjYyPbVAsGMbaaIc317DjTo5OJd5WY1_H2Q5dJQ5nBrlJZS1LWNhVraDGzwS_EF84725kWosZ9fVlvmXWdc11xPqwkm8z21DqhetfaQl2VFMGmeNzyUe_KrwEWsv25PmMBekqEd3HLiCr9R8HPJCdT2NTGsHGf4urKFbqXgDk1p2ZjF8K8WQ2fLpIq_V2EMFpdtfqGb6cB23m5xY078KoNUp91DsbK9Bye8MeUugWCiTMsIzBDRoTTHbtOl5e3d1kpUWVdC3n0h6UGf6W92bXQEMY8a9eJld79BxrU3GM9VRHuVJbazB2Bvm4ZstVw_wak7fdWXxaCcEI-R0","dp":"VxtGArmZQCoQwH_TCprzHegTHTYe8r7EUoxieb0N4L5PZrZjAUizL2hqRUd8J6vFubj7tleAw2FFxYObx44y4TYm78W-ljXt4IPFdrzZzHsbtw7kMeW8jFF3uHvc2Xe82FGzBZb7oCtfjL9UPuaCZTOdzmX7NKLtFJulyYIsyM9NvfTMCFwGfxGAtNcBB8VQSJZb-9rOz9oxDPt9StPdcmPYDJNM2m_50OiUy_aCviOLYZhQ41_V-LxRm_4RTVHQNaD-0JGGWn9uBlO6d6Wwne4LY0sIAU1RhPEUGQ5fSjSOwTamFGiC7Egn0r8saTxlabENtgSCxpsltOvF2fakHw","dq":"MODZF4XvWj9hurdCu9qulXVaHYc7tvGLRWdp3nmlgn7GP18I3Yb66VIGfHjXtpwYSH01Xj2WElGcyG4sEK2xi5OcD7bbna1xqupu4_vMbP2DwwzcMBMSEi5V0-xQYnfwKwZ2ItXqB3MgLwl0tSiwsV-sMz2GbKjIMXW3V61d6cKWaaWkK4E4uaEcEqCcPOheWh03GihOSJk9KmUYmqv0JcJCZdG5ZbZfvcdEYtQQw50ApHQAcVOua-pjOKHX_O4yz34ba8MYX7fgsyGEKfku3_thx9F9M_uH-uUYBzhjfxJz9YR1UpkD8E4kbGlLiqFXgm3L0R0pu9I_gUIuVRLY_w","e":"AQAB","ext":true,"kty":"RSA","n":"hbfdTSCnn3HiC9CEfLH7lmTtWKRY1tG1uYf079UvnWfnluUSWw26YciSylwG6kjQUGN1TWTUpJvb_KRae867t599YNSqilKtETc-tkWJhC2vrgBCfu6XUnmLbk0wzU2Eibfp2O2kQ5SV5MUL_eZO-va4iHMm6hgxtHIcHJFbCM3uA484eyNRNbKdM081_T0faVpHLSRmwIpRWhuYTGwAodafFg99dz80e4_Y_jX1eXGzDJBjeyV5RVBNH0h7IwF3KUM-5GU8GnO-lBzmq_3aaBrB543vzDcY4nn1FQqpsd9mgWl-dLu4Xd8hGRFqBltOGk05iFoksFXpDUe4jAn--lEw8kara6gH80gN69nBxlc861RY5R3pe-01DdS-mAj2g1C58hV6hkIoNqQQqjvlH_4lJiMD-i1IhuMpjhBWfI2kLntAdHuvmU8SGv3JFTa4zua6FAXT6_AjqwXja5JhI5EKrzAkAAL6Fmz1C6MI7CljiOXxqj-V1-SepicuoDiuafgIGE2RENqW3MT25dpSb4lTdeXKDPwzuBWswVFpZse9GSFs9Zf1_FPJhijNtrRaGZ3_3WeEiapXnsgca1J2mnSzhZdSh7D2K3w-QRSD1VwiV5_Uolds0Z67n5-PsKsmM5qt3-PFHFHFFDoxc3ZlLs0KwmwFA2qwixcUXog5RWk","p":"z5TioYDS104ZguCKnH-oW1R3wn_PhzA4T8OTvYf4KP9b6jJp3-tWxJQZaPj3dL2KCOfgMezCgVrRTijqKccI1BmoA1H8S3FkBtRQVtqExhlECgpc7WQjbfupmIBcipgboP_8C-WJh2e0yVG7FIOjSDoKRul_P0ETKZIC7wegaIT9buZyhuvt0iUjy5uOrrW52St8izXgPqN9HHsCJzzkH2awXhY5Vueo8-lggkdi1kpHhTu9H3-NPzyv3SUgRIqaWkARJIV6O8KatY48XunbYDZNCHcux5LHW9FarYT_U2oQRQJxDioDc52NNn5P2rKyZMys353uLMF53IwkIlXT1w","q":"pOhy7MJY9b5KLA6Rj_jB48UccD_NXng_Pqy2hrVQpL1qth9yrUznlV5l2mDrhqVu6HgOzknijp4pRuAgdSg89LiNbU3_PiBHl61dpDs0eb7uutvJnB7d7DXtmw0yNW517_uWUobiWi9prwYtcuzZX54gv5dULQ-1EWh6yv2b9fAbyME5_TKzxXUJrtp2-QKPZIk8EwXD1kuyStwMR5hYerNrZVWIq76L4f3kv0-OPE20xIg6laKBcBIfbpJfemUUJX4scABD70rf8vSrh52J2nhLNu7k4lFQMv13-LsSFmdIjKaQ4FXoN2D3ewVxOAj9ZpaqEordLmBULiX55sqIvw","qi":"bLpjE9ufb_QcMPKGFAw93tvwvSYqRfKiWUU7SLR7Imd8LkPsJruqS1BeGseK2XwjvtXS_SlvMzGIBqdB0M1V5Pq3N61JmkQ6CSh1rvo0ewZtHv1JNGzh3KoZVOwYM8c4r4n3rH_xbeHxViQPxjXBnU_a1DXT-7YZzRFtPxMeCRZx5ltfa1D-UABMAn86vGDwTR3PaqwLh38o4dM22wwQivOmP2JpjN6Gb9CcN--EqoYCKsggwNg-twvI14WcGgY1N1eRRkxVGKpF-fv20TyHV6bzqHxOf0Qkfilw6z18g6guBURdEj2byHiLRcnB21hgbawCNedmuxHm_ZqilU6i4Q"};

      let transaction = await arweave.createTransaction({
            data: Buffer.from(bookmarkDataOnchainStr,'utf8')
      }, key);

      let data_id = transaction.data;
      
      // offchain
      const bookmark = db.collection('bookmarks').doc();
      const bookmarkDataOffchain = {
        id: bookmark.id,
        origin: bookmarkDataOnchain,
        arweaveURL: `http://arwrave.net/ + ${data_id}`
      };
      
      bookmark.set(bookmarkDataOffchain);
  
      res.status(200).send({
        status: 'success',
        message: 'bookmark added successfully',
        data: data_id
      })
    } catch(error: any) {
        res.status(500).json(error.message)
    }
}

const getBookmarks = async (req: Request, res: Response) => {
    try {
        const allBookmarks = await db.collection('bookmarks').get();
        return res.status(200).json(allBookmarks.docs);
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
}

export { addBookmark, getBookmarks };



