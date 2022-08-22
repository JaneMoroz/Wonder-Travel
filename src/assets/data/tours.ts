import groupVideo from "../video/hiking-2-big.mp4"
import familyVideo from "../video/kids.mp4"
import soloVideo from "../video/solo.mp4"
import activeVideo from "../video/hiking-big.mp4"

export const tours = [
  { id: 0, title: "АКТИВНЫЕ", path: "active-tour", video: activeVideo },
  { id: 1, title: "ИНДИВИДУАЛЬНЫЕ", path: "vip-tour", video: soloVideo },
  { id: 3, title: "ГРУППОВЫЕ", path: "group-tour", video: groupVideo },
  { id: 4, title: "СЕМЕЙНЫЕ", path: "family-tour", video: familyVideo },
]
