import styles from './styles.module.css'

export default function Form() {
    return (
        <>
            <form>
                <div>
                    <label htmlFor="">Bill</label>
                    <input placeholder="0" type="number" />
                </div>
                <div>
                    <label htmlFor="">Select Tip %</label>
                    <div>
                        <button value="0.05">5%</button>
                        <button value="0.10">10%</button>
                        <button value="0.15">15%</button>
                        <button value="0.25">25%</button>
                        <button value="0.50">50%</button>
                        <input type="number" placholder="Custom" />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Number of People <span>Can't be zero</span></label>
                    <input type="number" placeholder="0" />
                </div>
            </form>
        </>
    )
}