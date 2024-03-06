import { images } from "../../../next.config"
import Link from "next/link";
import styles from "./footer.module.css";
import Imagem from "next/image";
export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <Link href={"https://" + images.domains[1]}>
                <Imagem width={100}
                    height={100}
                    src={"https://www.logo.wine/a/logo/Moodle/Moodle-Logo.wine.svg"} />
            </Link>
            <h1>footer</h1>
        </footer>
    );
}