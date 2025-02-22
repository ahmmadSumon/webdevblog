import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useBlogStore } from "@/store/blogStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableHeader, TableRow , TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  const { blogs, addBlog, editBlog, deleteBlog } = useBlogStore();
  const { register, handleSubmit, setValue, reset } = useForm();
  const [editingId, setEditingId] = useState<number | null>(null);

  const onSubmit = (data: any) => {
    if (editingId !== null) {
      editBlog(editingId, data);
      setEditingId(null);
    } else {
      addBlog({ id: Date.now(), ...data });
    }
    reset();
  };

  const handleEdit = (blog: any) => {
    setEditingId(blog.id);
    setValue("title", blog.title);
    setValue("content", blog.content);
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Edit Blog" : "Add New Blog"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input placeholder="Title" {...register("title", { required: true })} />
            <Textarea placeholder="Content" {...register("content", { required: true })} />
            <Button type="submit">{editingId ? "Update" : "Create"}</Button>
          </form>
        </CardContent>
      </Card>

      {/* Blog List */}
      <div className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.content.substring(0, 50)}...</TableCell>
                <TableCell className="flex gap-2">
                  <Button size="sm" onClick={() => handleEdit(blog)}>Edit</Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteBlog(blog.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
