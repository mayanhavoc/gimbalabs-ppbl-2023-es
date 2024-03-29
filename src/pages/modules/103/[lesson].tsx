import SLTs103 from "@/src/components/course-modules/103/103-SLTs";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
import slt from "@/src/data/slts-english.json"


const Module103Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 103);

  const status = null

  // Sidebar items are generated from module.lessons i.e. from the JSON file
  // Here we simply set the contents by matching the slug and key
  const lessons = [
    { key:"slts", component:<><SLTs103 /><ComingSoon /></>},
    { key:"1031", component:<ComingSoon />},
    { key:"1032", component:<ComingSoon />},
    { key:"1033", component:<ComingSoon />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/103" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module103Lessons;