import { ButtonAction } from "@/components/button-action";
import { ButtonCard } from "@/components/button-card";
import { Header } from "@/components/header";
import { Text, ScrollView } from "react-native";

export default function Screen(){
    return (
        <ScrollView className="h-screen bg-white">
            <Header/>
            <ButtonCard title="Conta" onPress={() => {}}>
                <Text className="text-2xl font-semibold">R$ 1.000,00</Text>
            </ButtonCard>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mx-2">
                <ButtonAction icon="pix" label="Pix" onPress={()=>{}} />
                <ButtonAction icon="barcode" label="Pagar" onPress={()=>{}} />
                <ButtonAction icon="hand-holding-dollar" label="Pegar emprestado" badge="R$ 12.300" onPress={()=>{}} />
                <ButtonAction icon="money-bill-transfer" label="Transferir" onPress={()=>{}} />
                <ButtonAction icon="receipt" label="Dinheiro" onPress={()=>{}} />
            </ScrollView>

        </ScrollView>        
    )
}