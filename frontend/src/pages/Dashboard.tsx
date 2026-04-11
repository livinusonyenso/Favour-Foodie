import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LayoutDashboard, Pencil, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { useFoodie } from "@/context/FoodieContext";
import { Category } from "@/data/categories";

// ─── Schema ───────────────────────────────────────────────────────────────────

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  description: z.string().min(5, "Description must be at least 5 characters").max(300),
  icon: z.string().min(1, "Icon is required").max(10),
});

type FormValues = z.infer<typeof schema>;

// ─── Dashboard ────────────────────────────────────────────────────────────────

const Dashboard = () => {
  const { categories, isLoading, error, updateCategory, isUpdating } = useFoodie();
  const [selected, setSelected] = useState<Category | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", description: "", icon: "" },
  });

  const selectCategory = (cat: Category) => {
    setSelected(cat);
    setSuccessMsg(null);
    setErrorMsg(null);
    form.reset({ name: cat.name, description: cat.description, icon: cat.icon });
  };

  const onSubmit = async (values: FormValues) => {
    if (!selected) return;
    setSuccessMsg(null);
    setErrorMsg(null);
    try {
      await updateCategory(selected.id, values);
      setSuccessMsg(`"${values.name}" updated successfully.`);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Update failed.");
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-hero-gradient pattern-overlay">
        <div className="container-custom">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-primary-foreground" />
            <div>
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground">
                Dashboard
              </h1>
              <p className="text-primary-foreground/80 mt-1">
                Manage and update product categories
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-16 bg-background">
        <div className="container-custom">
          {/* Loading / global error */}
          {isLoading && (
            <p className="text-center text-muted-foreground py-16">
              Loading categories…
            </p>
          )}
          {error && (
            <p className="text-center text-destructive py-16">{error}</p>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* ── Category List ──────────────────────────────────── */}
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                  Categories{" "}
                  <span className="text-muted-foreground font-normal text-sm">
                    ({categories.length})
                  </span>
                </h2>

                <div className="border border-border rounded-xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted text-muted-foreground">
                      <tr>
                        <th className="text-left px-4 py-3 font-medium">Icon</th>
                        <th className="text-left px-4 py-3 font-medium">Name</th>
                        <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">
                          Products
                        </th>
                        <th className="px-4 py-3" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {categories.map((cat) => (
                        <tr
                          key={cat.id}
                          className={`transition-colors ${
                            selected?.id === cat.id
                              ? "bg-primary/5"
                              : "hover:bg-muted/50"
                          }`}
                        >
                          <td className="px-4 py-3 text-xl">{cat.icon}</td>
                          <td className="px-4 py-3 font-medium text-foreground">
                            {cat.name}
                          </td>
                          <td className="px-4 py-3 hidden sm:table-cell">
                            <Badge variant="secondary">
                              {cat.products.length}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Button
                              size="sm"
                              variant={selected?.id === cat.id ? "default" : "outline"}
                              className="gap-1.5"
                              onClick={() => selectCategory(cat)}
                            >
                              <Pencil className="w-3.5 h-3.5" />
                              Edit
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Edit Form ──────────────────────────────────────── */}
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                  {selected ? `Editing: ${selected.name}` : "Select a category to edit"}
                </h2>

                {!selected && (
                  <div className="border border-dashed border-border rounded-xl p-10 text-center text-muted-foreground text-sm">
                    Click <strong>Edit</strong> on any category to load its details here.
                  </div>
                )}

                {selected && (
                  <div className="border border-border rounded-xl p-6 bg-card">
                    {/* Feedback banners */}
                    {successMsg && (
                      <div className="flex items-center gap-2 mb-4 px-4 py-3 rounded-lg bg-green-50 text-green-700 border border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800 text-sm">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        {successMsg}
                      </div>
                    )}
                    {errorMsg && (
                      <div className="flex items-center gap-2 mb-4 px-4 py-3 rounded-lg bg-destructive/10 text-destructive border border-destructive/20 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-5"
                      >
                        {/* Icon */}
                        <FormField
                          control={form.control}
                          name="icon"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Icon (emoji)</FormLabel>
                              <FormControl>
                                <div className="flex items-center gap-3">
                                  <span className="text-3xl leading-none">
                                    {field.value || "?"}
                                  </span>
                                  <Input
                                    placeholder="e.g. 🦐"
                                    className="max-w-[120px]"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Name */}
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Category name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Description */}
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Short description…"
                                  rows={3}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-3 pt-1">
                          <Button
                            type="submit"
                            disabled={isUpdating}
                            className="gap-2"
                          >
                            {isUpdating && (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            )}
                            {isUpdating ? "Saving…" : "Save Changes"}
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setSelected(null);
                              setSuccessMsg(null);
                              setErrorMsg(null);
                              form.reset();
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
