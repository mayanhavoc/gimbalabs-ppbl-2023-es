import { Text, Box, Heading } from "@chakra-ui/react";
import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";
import YouWillKnowYouAreSuccessfulIf from "@/src/components/lms/Lesson/YouWillKnowYouAreSuccessfulIf";

import module from "./module102.json";
import Docs1026 from "@/src/components/course-modules/102/Docs1026.mdx";

export default function Lesson1026() {
  const slug = "1026";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={102} sltId="102.6" slug={slug}>
      <LessonIntroAndVideo lessonData={lessonDetails} />
      <Docs1026 />
    </LessonLayout>
  );
}
