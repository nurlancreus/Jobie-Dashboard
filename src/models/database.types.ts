export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      applications: {
        Row: {
          created_at: string
          email: string | null
          id: number
          phone: string | null
          position: string
          position_type: string
          status: string
          vacancy_key: number | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          phone?: string | null
          position?: string
          position_type?: string
          status?: string
          vacancy_key?: number | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          phone?: string | null
          position?: string
          position_type?: string
          status?: string
          vacancy_key?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_vacancy_key_fkey"
            columns: ["vacancy_key"]
            isOneToOne: false
            referencedRelation: "vacancies"
            referencedColumns: ["id"]
          }
        ]
      }
      companies: {
        Row: {
          about: string | null
          created_at: string
          employee_count: number | null
          id: number
          location: string | null
          logo: string | null
          name: string | null
          reviews: number | null
        }
        Insert: {
          about?: string | null
          created_at?: string
          employee_count?: number | null
          id?: number
          location?: string | null
          logo?: string | null
          name?: string | null
          reviews?: number | null
        }
        Update: {
          about?: string | null
          created_at?: string
          employee_count?: number | null
          id?: number
          location?: string | null
          logo?: string | null
          name?: string | null
          reviews?: number | null
        }
        Relationships: []
      }
      vacancies: {
        Row: {
          about: string | null
          company_key: number | null
          created_at: string
          details: string | null
          id: number
          location: string | null
          max_salary: number | null
          min_salary: number | null
          name: string
          position: string | null
          position_type: string | null
        }
        Insert: {
          about?: string | null
          company_key?: number | null
          created_at?: string
          details?: string | null
          id?: number
          location?: string | null
          max_salary?: number | null
          min_salary?: number | null
          name: string
          position?: string | null
          position_type?: string | null
        }
        Update: {
          about?: string | null
          company_key?: number | null
          created_at?: string
          details?: string | null
          id?: number
          location?: string | null
          max_salary?: number | null
          min_salary?: number | null
          name?: string
          position?: string | null
          position_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vacancies_company_key_fkey"
            columns: ["company_key"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_vacancies: {
        Args: {
          keyword: string
        }
        Returns: {
          about: string | null
          company_key: number | null
          created_at: string
          details: string | null
          id: number
          location: string | null
          max_salary: number | null
          min_salary: number | null
          name: string
          position: string | null
          position_type: string | null
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
