import { Airplay, File, Film, MessageSquareMore } from "lucide-react"

function App() {

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="flex text-2xl">
          ברוכים הבאים למעבדת ה-API
        </h1>
        <div>
          במעבדה זו תפגשו 4 שיטות לתקשורת מול שרתים, העלאת קבצים, הזרמת מדיה ושליחת פרומפטים לשרת
        </div>
        <div className="grid grid-cols-2 gap-4 w-full p-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-center border-b-2 pb-4">
              <File />
            </div>
            <div className="flex justify-center flex-col">
              <p className="text-xl font-bold">העלאת קובץ</p>
              <p className="p-2 text-justify">
                בהעלאת קובץ אנחנו 'אורזים' את המידע שאנחנו מעוניינים לשלוח אל השרת, ואז בשרת הוא מקבל את המידע מחולק בצורה שדורשת פיענוח, וממיר אותו חזרה לקובץ אמיתי
              </p>
              <p className="p-2 text-justify">
                בדוגמה פה מקבלים בתמורה לקובץ ששלחנו את הקובץ ששלחנו כדי לראות איך אנחנו שולחים בקשה לשרת ומקבלים בתמורה את הקובץ
              </p>
            </div>
            <div className="text-sm text-justify italic text-slate-500">
              כשאתם משחקים בהעברת קבצים שימו לב שאתם מאחסנים אותם נכון ולא משאירים אותם ב-RAM של השרת, אחרת סתם יהיה שם עמוס ולא יעיל
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex justify-center border-b-2 pb-4">
              <Film />
            </div>
            <div className="flex justify-center flex-col">
              <p className="text-xl font-bold">הזרמת קובץ מדיה משרת</p>
              <p className="p-2 text-justify">
                בהנחה וקיים לנו קובץ מדיה, נוכל להזרים אותו מהשרת בחלקים, בתהליך שנקרא 'צבירת באפרים' שמאפשרים לדפדפן להציג את הסרטון בחלקים עוד לפני שסיים לטעון את כולו
              </p>
              <p className="p-2 text-justify">
                בדוגמה פה אתם מקבלים סרטון שקיים באופן קבוע בשרת, ותוכלו לשים לב איך הבאפר נטען במהלך הנגינה
              </p>
            </div>
            <div className="text-sm text-justify italic text-slate-500">
              עבודה עם באפרים יכולה לאפשר לשפר את יעילות המערכת מכיוון שניתן לחלק את כמות המידע שעוברת בבת אחת ליחידות קטנות יותר ובכך להקל על העומס במערכת
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex justify-center border-b-2 pb-4">
              <Airplay />           </div>
            <div className="flex justify-center flex-col">
              <p className="text-xl font-bold">שידור חי</p>
              <p className="p-2 text-justify">
                שידור חי דומה בעיקרון הפעולה שלו להזרמת מדיה, אבל אנחנו לא מחכים שהמדיה תאוחסן במסד נתונים כלשהו, אלא ישר נשלח אותו למשתמש בקצה              </p>
              <p className="p-2 text-justify">
                בדוגמה פה אנחנו מתחברים למצלמת הרשת במחשב דרך סקריפט בפייתון שלא מספק פורמט של וידאו בזמן אמת, אלא זרם של תמונות בודדות שיוצרותאשליה של שידור חי              </p>
            </div>
            <div className="text-sm text-justify italic text-slate-500">
              אולי תוכלו לשחק קצת בשרת JS ולמצוא את החלק הייעודי להזרמה בזמן אמת ולהפוך את זה להזרמת וידאו כאילו הקובץ שמור בשרת כבר...            </div>          </div>

          <div className="border rounded-lg p-4">
            <div className="flex justify-center border-b-2 pb-4">
              <MessageSquareMore />
            </div>
            <div className="flex justify-center flex-col">
              <p className="text-xl font-bold">שליחת הודעות</p>
              <p className="p-2 text-justify">
                שליחת הודעות ושמירה על תקשורת רציפה עם השרת מתבססת על טכנולוגיה שנקראת Web-Socket והיא למעשה שומרת על ההתקשרות בין המחשב לשרת, גם אם אין בפועל שום תעבורה של מידע, ופשוט ממתינה לפנייה מהמשתמש לשרת ולהיפך              </p>
              <p className="p-2 text-justify">
                בדוגמה פה אנחנו מדגימים אפליקציית צ'אט בסיסית, אבל זה עובד אותו דבר עם כל מודל שפה כזה או אחר              </p>
            </div>
            <div className="text-sm text-justify italic text-slate-500">
              שימו לב שעד לנקודה הזו לא השתמשתי בביטוי API, משום שכל נקודת התקשרות של הדף שאתם רואים מול העיניים שלכם עם השרת מתבצע על-ידי API מוגדר כפי שמופיע לכם בשרת            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
