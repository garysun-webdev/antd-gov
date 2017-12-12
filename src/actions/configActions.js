export const PAGE_SWITCH = "PAGE_SWITCH";

export function pageSwitch(pageName) {
  return { type: PAGE_SWITCH, pageName };
}
