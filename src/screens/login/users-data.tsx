export const users: {
    username: string,
    password: string,
    fullname: string,
    email?: string
    role: "teacher" | "student" | "admin",
    image?: string
}[] = [
    {
        username: "quang",
        password: "1",
        fullname: "Mai Văn Quang",
        email: "maiquang1470@gmail.com",
        role: "teacher",
        image: "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/167056920_3573844186174211_3168939146584255911_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bVRLj_JCuBgAX962BSH&_nc_ht=scontent.fdad2-1.fna&oh=f9e42d91ec94e6dca3c019539d39b983&oe=6095197B"
    },
    {
        username: "nga",
        password: "1",
        fullname: "QNga",
        role: "teacher"
    },
    {
        username: "teacher",
        password: "1",
        fullname: "Teacher",
        role: "teacher"
    },
    {
        username: "student",
        password: "1",
        fullname: "Student",
        role: "student"
    },
    {
        username: "admin",
        password: "1",
        fullname: "Admin",
        role: "admin"
    },

]