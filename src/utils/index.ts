import classNames from "classnames";
import { twMerge } from 'tailwind-merge';
export const superTwMerge = (...args: classNames.ArgumentArray) => {
    return twMerge(classNames(args));
};