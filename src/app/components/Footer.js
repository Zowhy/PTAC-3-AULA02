import { images } from "../../../next.config"
import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
    return (
        <footer className={styles.rodape}>
        
            <Link href = {"https://ead.ifms.edu.br" } >
                <Image
                  src={"https://www.logo.wine/a/logo/Moodle/Moodle-Logo.wine.svg"}
                width={100}
                height={100}

               />

            </Link>
            <h1>footer</h1>
         
        </footer>
    );
}