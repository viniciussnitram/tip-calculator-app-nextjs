import styles from './styles.module.css'

export default function Display() {
    return (
        <>
            <section>
                <div>
                    <p>
                        Tip Amount <br />
                        <span>/ person</span>
                    </p>
                    <h2>$<span>0.00</span></h2>
                </div>
                <div>
                    <p>
                        Total <br />
                        <span>/ person</span>
                    </p>
                    <h2>$<span>0.00</span></h2>
                </div>
                <button>reset</button>
            </section>
        </>
    )
}