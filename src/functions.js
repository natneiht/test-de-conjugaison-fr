import axios from "axios";
import {
  composeTemps,
  verbWithEtre,
  auxConjugaison,
  tempsOfAuxiliary,
  toutPronoms,
} from "./staticParams";
import { API_URL } from "./config";

export async function loadQuestion(num) {
  const res = await axios.get(API_URL + num);
  if (res) {
    return res;
  } else {
    console.log(res);
    return null;
  }
}

export function getRandomItemFromArray(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

export const isComposeTemps = (temps, mode) => {
  const compMode = Object.keys(composeTemps);
  // console.log(compMode);
  if (compMode.includes(mode) && composeTemps[mode].includes(temps)) {
    return true;
  } else {
    return false;
  }
};
export const isPronominal = (verbe) => {
  if (verbe.substring(0, 2) == "se" || verbe.substring(0, 2) == "s'")
    return true;
  return false;
};

export function getAuxiliary(verbe, temps, mode, pronom) {
  let auxiliary = "avoir"; // default

  // Check isCompose
  if (isComposeTemps(temps, mode)) {
    if (verbWithEtre.includes(verbe) || isPronominal(verbe)) {
      auxiliary = "être";
    }
    // "temps" & "mode" of auxiliary
    let auxTemps = tempsOfAuxiliary[mode][temps]["temps"];
    let auxMode = tempsOfAuxiliary[mode][temps]["mode"];
    // Find pronom from list (This is temporary solution, I'll fix later)
    // const pronomId = toutPronoms.findIndex(pronom);
    return auxConjugaison[auxiliary][auxMode][auxTemps][pronom];
  } else {
    return "";
  }
}
