import styles from "./Material.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useGetMaterialOneQuery } from "../../store/api/materialsService";
import { MouseEventHandler, useEffect, useState } from "react";
import { PAGES_PATH } from "../../types/types";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import AddComment from "../../components/AddComment/AddComment";
import Comments from "../../components/Comments/Comments";

function Material() {
  const { name } = useParams();
  const navigate = useNavigate();

  const userId = "62dcbf24945d8ab30843e1a7";
  const { data: material, isError } = useGetMaterialOneQuery(name);

  const [isLike, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  // TODO: Сделать отдельный хук по лайкам
  useEffect(() => {
    if (material) {
      setIsLike(material.users_liked_ids.includes(userId));
      setLikesCount(material.users_liked_ids.length);
    }
  }, [material]);

  const onToogleLike: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();

    setIsLike(!isLike);
    setLikesCount(isLike ? likesCount - 1 : likesCount + 1);
  };

  useEffect(() => {
    if (isError) {
      navigate(PAGES_PATH.notFound);
    }
  }, [isError, navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{material?.title}</h1>
        <div className={styles.author_wrapper}>
          <p>21 июня 2021</p>
        </div>
        <div className={styles.content}>
          <p>
            Далеко-далеко за словесными горами в стране гласных и согласных
            живут рыбные тексты. Вдали от всех живут они в буквенных домах на
            берегу Семантика большого языкового океана. Маленький ручеек Даль
            журчит по всей стране и обеспечивает ее всеми необходимыми
            правилами. Эта парадигматическая страна, в которой жаренные члены
            предложения залетают прямо в рот. Даже всемогущая пунктуация не
            имеет власти над рыбными текстами, ведущими безорфографичный образ
            жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem
            ipsum решила выйти в большой мир грамматики. Великий Оксмокс
            предупреждал ее о злых запятых, диких знаках вопроса и коварных
            точках с запятой, но текст не дал сбить себя с толку. Он собрал семь
            своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу.
          </p>
          <img
            src="https://club.nikolaydemidovez.by/images/materials/buhgalter.jpeg"
            alt="buhgalter"
          />
          <p>
            Взобравшись на первую вершину курсивных гор, бросил он последний
            взгляд назад, на силуэт своего родного города Буквоград, на
            заголовок деревни Алфавит и на подзаголовок своего переулка Строчка.
            Грустный риторический вопрос скатился по его щеке и он продолжил
            свой путь. По дороге встретил текст рукопись. Она предупредила его:
            «В моей стране все переписывается по несколько раз. Единственное,
            что от меня осталось, это приставка «и». Возвращайся ты лучше в свою
            безопасную страну». Не послушавшись рукописи, наш текст продолжил
            свой путь. Вскоре ему повстречался коварный составитель рекламных
            текстов, напоивший его языком и речью и заманивший в свое агенство,
            которое использовало его снова и снова в своих проектах. И если его
            не переписали, то живет он там до сих пор. Далеко-далеко за
            словесными горами в стране гласных и согласных живут рыбные тексты.
          </p>

          <p>
            Вдали от всех живут они в буквенных домах на берегу Семантика
            большого языкового океана. Маленький ручеек Даль журчит по всей
            стране и обеспечивает ее всеми необходимыми правилами. Эта
            парадигматическая страна, в которой жаренные члены предложения
            залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над
            рыбными текстами, ведущими безорфографичный образ жизни. Однажды
            одна маленькая строчка рыбного текста по имени Lorem ipsum решила
            выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о
            злых запятых, диких знаках вопроса и коварных точках с запятой, но
            текст не дал сбить себя с толку. Он собрал семь своих заглавных
            букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на
            первую вершину курсивных гор, бросил он последний взгляд назад, на
            силуэт своего родного города Буквоград, на заголовок деревни Алфавит
            и на подзаголовок своего переулка Строчка.
          </p>

          <div className={styles.row_image}>
            <img
              src="https://club.nikolaydemidovez.by/images/materials/calculator.jpeg"
              alt="calculator"
            />
            <p>
              Грустный риторический вопрос скатился по его щеке и он продолжил
              свой путь. По дороге встретил текст рукопись. Она предупредила
              его: «В моей стране все переписывается по несколько раз.
              Единственное, что от меня осталось, это приставка «и». Возвращайся
              ты лучше в свою безопасную страну». Не послушавшись рукописи, наш
              текст продолжил свой путь. Вскоре ему повстречался коварный
              составитель рекламных текстов, напоивший его языком и речью и
              заманивший в свое агенство, которое использовало его снова и снова
              в своих проектах. И если его не переписали, то живет он там до сих
              пор. Далеко-далеко за словесными горами в стране гласных и
              согласных живут рыбные тексты. Вдали от всех живут они в буквенных
              домах на берегу Семантика большого языкового океана. Маленький
              ручеек Даль журчит по всей стране и обеспечивает ее всеми
              необходимыми правилами. Эта парадигматическая страна, в которой
              жаренные члены предложения залетают прямо в рот. Даже всемогущая
              пунктуация не имеет власти над рыбными текстами, ведущими
              безорфографичный образ жизни. Однажды одна маленькая строчка
              рыбного текста по имени Lorem ipsum решила выйти в большой мир
              грамматики. Великий Оксмокс предупреждал ее о злых запятых, диких
              знаках вопроса и коварных точках с запятой, но текст не дал сбить
              себя с толку.
            </p>
          </div>

          <p>
            Он собрал семь своих заглавных букв, подпоясал инициал за пояс и
            пустился в дорогу. Взобравшись на первую вершину курсивных гор,
            бросил он последний взгляд назад, на силуэт своего родного города
            Буквоград, на заголовок деревни Алфавит и на подзаголовок своего
            переулка Строчка. Грустный риторический вопрос скатился по его щеке
            и он продолжил свой путь. По дороге встретил текст рукопись.
          </p>

          <p>
            Она предупредила его: «В моей стране все переписывается по несколько
            раз. Единственное, что от меня осталось, это приставка «и».
            Возвращайся ты лучше в свою безопасную страну». Не послушавшись
            рукописи, наш текст продолжил свой путь. Вскоре ему повстречался
            коварный составитель рекламных текстов, напоивший его языком и речью
            и заманивший в свое агенство, которое использовало его снова и снова
            в своих проектах. И если его не переписали, то живет он там до сих
            пор. Далеко-далеко за словесными горами в стране гласных и согласных
            живут рыбные тексты. Вдали от всех живут они в буквенных домах на
            берегу Семантика большого языкового океана. Маленький ручеек Даль
            журчит по всей стране и обеспечивает ее всеми необходимыми
            правилами. Эта парадигматическая страна, в которой жаренные члены
            предложения залетают прямо в рот.
          </p>

          <p>
            Даже всемогущая пунктуация не имеет власти над рыбными текстами,
            ведущими безорфографичный образ жизни. Однажды одна маленькая
            строчка рыбного текста по имени Lorem ipsum решила выйти в большой
            мир грамматики. Великий Оксмокс предупреждал ее о злых запятых,
            диких знаках вопроса и коварных точках с запятой, но текст не дал
            сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал
            инициал за пояс и пустился в дорогу. Взобравшись на первую вершину
            курсивных гор, бросил он последний взгляд назад, на силуэт своего
            родного города Буквоград, на заголовок деревни Алфавит и на
            подзаголовок своего переулка Строчка. Грустный риторический вопрос
            скатился по его щеке и он продолжил свой путь. По дороге встретил
            текст рукопись. Она предупредила его: «В моей стране все
            переписывается по несколько раз. Единственное, что от меня осталось,
            это приставка «и». Возвращайся ты лучше в свою безопасную страну».
            Не послушавшись рукописи, наш текст продолжил свой путь. Вскоре ему
            повстречался коварный составитель рекламных текстов, напоивший его
            языком и речью и заманивший в свое агенство, которое использовало
            его снова и снова в своих проектах. И если его не переписали, то
            живет он там до сих пор. Далеко-далеко за словесными горами в стране
            гласных и согласных живут рыбные тексты. Вдали от всех живут они в
            буквенных домах на берегу Семантика большого языкового океана.
            Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми
            необходимыми правилами. Эта парадигматическая страна, в которой
            жаренные члены предложения залетают прямо в рот. Даже всемогущая
            пунктуация не имеет власти над рыбными текстами, ведущими
            безорфографичный образ жизни. Однажды одна маленькая строчка
          </p>
        </div>
        <div className={styles.main_footer}>
          <div />
          <div onClick={onToogleLike} className={styles.like}>
            {likesCount || ""}
            {isLike ? (
              <IoHeartSharp size="25" color="#e17055" />
            ) : (
              <IoHeartOutline size="25" color="#6f6f6f" />
            )}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <h3>Комментарии (12)</h3>
        <div className={styles.comments}>
          <AddComment />
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default Material;
