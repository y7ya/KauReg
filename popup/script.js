async function getCheckedLectures() {
  const checkedLectures = await chrome.storage.sync.get("data");
  try {
      return JSON.parse(checkedLectures.data);
  } catch (error) {
    return null;
  }
}

function generateErrorMessage(title, message){
  const errorWrapper = document.createElement('div');
  errorWrapper.className = "error";

  const titleTag = document.createElement('p');
  titleTag.className = "title";
  titleTag.innerHTML = title;

  const messageTag = document.createElement('p');
  messageTag.className = 'message';
  messageTag.innerHTML = message;

  errorWrapper.appendChild(titleTag);
  errorWrapper.appendChild(messageTag);

  return errorWrapper;
}

function generateCourseDiv(lecture) {
  const courseWrapper = document.createElement("div");
  courseWrapper.className = "course";

  const title = document.createElement("span");
  title.className = "course_title";
  title.innerText = lecture.code;

  const id = document.createElement("span");
  id.className = "course_number";
  id.innerText = lecture.reference;

  const courseNumberWrapper = document.createElement("div");
  courseNumberWrapper.appendChild(id);

  courseWrapper.appendChild(title);
  courseWrapper.appendChild(courseNumberWrapper);

  return courseWrapper;
}

(async function main() {
  const checkedLectures = await getCheckedLectures();
  const coursesDOM = document.getElementById("courses");

  if(!checkedLectures || checkedLectures.length === 0){
    coursesDOM.appendChild(generateErrorMessage("لا توجد شعب مضافة","لإضافة شعب اذهب الى <a href='http://betterkau.com'>betterkau.com</a>"))
  }else{
    checkedLectures.forEach((lecture) => {
      coursesDOM.append(generateCourseDiv(lecture));
    });
  }
})();
