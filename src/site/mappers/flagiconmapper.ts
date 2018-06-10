import { AD_HOMINEM_FLAG_NAME } from "../../model/flags/adhominemflag";
import { AD_MISERICORDIAM_FLAG_NAME } from "../../model/flags/admisericordiamflag";
import {AD_PASSIONES_FLAG_NAME} from "../../model/flags/adpassionesflag";
import {AD_POPULUM_FLAG_NAME} from "../../model/flags/adpopulumflag";
import {AMBIGUOUS_FLAG_NAME} from "../../model/flags/ambiguousflag";
import {APPEAL_TO_AUTHORITY_FLAG_NAME} from "../../model/flags/appealtoauthorityflag";
import {NON_SEQUITOR_FLAG_NAME} from "../../model/flags/nonsequitorflag";
import {POST_HOC_FLAG_NAME} from "../../model/flags/posthocflag";
import {SPAM_FLAG_NAME} from "../../model/flags/spamflag";
import {VULGAR_FLAG_NAME} from "../../model/flags/vulgarflag";

export class FlagIconMapper{
    static map(flagType: string){
        switch(flagType){
            case AD_HOMINEM_FLAG_NAME: return "adhominem";
            case AD_MISERICORDIAM_FLAG_NAME: return "admisericordiam";
            case AD_PASSIONES_FLAG_NAME: return "adpassiones";
            case AD_POPULUM_FLAG_NAME: return "adpopulum";
            case AMBIGUOUS_FLAG_NAME: return "ambiguous";
            case APPEAL_TO_AUTHORITY_FLAG_NAME: return "appealtoauth";
            case NON_SEQUITOR_FLAG_NAME: return "nonsequitor";
            case POST_HOC_FLAG_NAME: return "posthoc";
            case SPAM_FLAG_NAME: return "spam";
            case VULGAR_FLAG_NAME: return "vulgar";
            default:
                return "default_flag";
        }
    }
}