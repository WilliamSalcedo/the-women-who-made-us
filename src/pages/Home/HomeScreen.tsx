import Header from "../../components/layout/Header";



export default function Home(){
    return(
        <section className="space-y-2">
            <Header/>
            <h1 className="text-2xl font-semibold">Home</h1>
            <p className="text-gray-600">Bienvenido</p>
            
        </section>
    )
}