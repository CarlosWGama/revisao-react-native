import { api } from "./api"



export const ItensService = {

    // ----------------------------
    get: async (id: string) => {
        try {
            const response = await api.get(`/itens/${id}`);
            return response.data;        
        } catch(error) {
            console.log(error);
            return null;
        }
    },
    // ----------------------------
    getAll: async () => {
         try {
            const response = await api.get(`/itens`);
            return response.data;        
        } catch(error) {
            console.log(error);
            return [];
        }
    },
    // ----------------------------
    create:  async (dados: any) => {
        try {
            const response = await api.post(`/itens`, dados);
            return response.data;        
        } catch(error) {
            console.log(error);
            return null;
        }
    },
    // ----------------------------
    update: async (dados: {id: string, titulo: string}) => {
        try {
            const response = await api.put(`/itens/${dados.id}`, dados);
        } catch(error) {
            console.log(error);
            return [];
         }  
    },
    // ----------------------------
    delete: async (id: string) => {
        try {
            const response = await api.delete(`/itens/${id}`);
        } catch(error) {
            console.log(error);
        }  
    }
}