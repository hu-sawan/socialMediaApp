const ConvertTimeToText = (postTime: number): string => {
    let result = "";

    const YEAR_IN_MS = 1000 * 60 * 60 * 24 * 365;
    const MONTH_IN_MS = 1000 * 60 * 60 * 24 * 30;
    const WEEK_IN_MS = 1000 * 60 * 60 * 24 * 7;
    const DAY_IN_MS = 1000 * 60 * 60 * 24;
    const HOUR_IN_MS = 1000 * 60 * 60;
    const MINUTE_IN_MS = 1000 * 60;

    switch (true) {
        case postTime < MINUTE_IN_MS:
            result = "Just now";
            break;
        case postTime < HOUR_IN_MS:
            {
                const minutes = Math.floor(postTime / MINUTE_IN_MS);
                if (minutes >= 2) {
                    result = `${minutes} Minutes ago`;
                } else {
                    result = `${minutes} Minute ago`;
                }
            }
            break;
        case postTime < DAY_IN_MS:
            {
                const hours = Math.floor(postTime / HOUR_IN_MS);
                if (hours >= 2) {
                    result = `${hours} Hours ago`;
                } else {
                    result = `${hours} Hour ago`;
                }
            }
            break;
        case postTime < WEEK_IN_MS:
            {
                const days = Math.floor(postTime / DAY_IN_MS);
                if (days >= 2) {
                    result = `${days} Days ago`;
                } else {
                    result = `${days} Day ago`;
                }
            }
            break;
        case postTime < MONTH_IN_MS:
            {
                const weeks = Math.floor(postTime / WEEK_IN_MS);
                if (weeks >= 2) {
                    result = `${weeks} Weeks ago`;
                } else {
                    result = `${weeks} Week ago`;
                }
            }
            break;
        case postTime < YEAR_IN_MS:
            {
                const months = Math.floor(postTime / MONTH_IN_MS);
                if (months >= 2) {
                    result = `${months} Months ago`;
                } else {
                    result = `${months} Month ago`;
                }
            }
            break;
        default:
            {
                const years = Math.floor(postTime / YEAR_IN_MS);
                if (years >= 2) {
                    result = `${years} Years ago`;
                } else {
                    result = `${years} Year ago`;
                }
            }
            break;
    }

    return result;
};

export const CalculatePostTime = (date: Date): string => {
    const POST_TIME_IN_MS = Date.now() - date.getTime();

    return ConvertTimeToText(POST_TIME_IN_MS);
};
