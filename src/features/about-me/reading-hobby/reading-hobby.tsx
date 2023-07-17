import TopBookSection from "./top-book-section/top-book-section.component"
import extremeOwnershipPhoto from './photos/ExtremeOwnership.jpg'
import definingDecadePhoto from './photos/TheDefiningDecade.jpg'
import text from "./reading-hobby.json"


import "./reading-hobby.scss"

export default function ReadingHobby() {
  return (
    <div className='reading-hobby'>
      <h3>{text.mainTitle}</h3>

      <p>{text.mainDescription}</p>

      <h4>{text.topBooks.title}</h4>
      <TopBookSection
        title={text.topBooks.extremeOwnership.title}
        author={text.topBooks.extremeOwnership.author}
        details={text.topBooks.extremeOwnership.lessonLearned}
        imageLocation={extremeOwnershipPhoto}
      />
      <TopBookSection
        title={text.topBooks.definingDecade.title}
        author={text.topBooks.definingDecade.author}
        details={text.topBooks.definingDecade.lessonLearned}
        imageLocation={definingDecadePhoto}
      />
    </div>
  )
}
