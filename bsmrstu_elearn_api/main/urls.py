from django.urls import path
from . import views

urlpatterns = [
    # Teachers
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>', views.TeacherDetail.as_view()),
    path('teacher-login/',views.teacher_login),

    # CourseCategory
    path('category/', views.CategoryList.as_view()),
    # all courses
    path('course/', views.CourseList.as_view()),
    # Course detail
    path('course/<int:pk>', views.CourseDetailView.as_view()),
    # Specific chapter
    path('chapter/<int:pk>', views.ChapterDetailView.as_view()),
    # Specific  Course Chapters
    path('course-chapters/<int:course_id>', views.CourseChapterList.as_view()),
    #Teacher Courses
    path('teacher-courses/<int:teacher_id>/', views.TeacherCourseList.as_view()),
    # Course Detail for teachers
    path('teacher-course-detail/<int:pk>', views.TeacherCourseDetail.as_view()),
]
