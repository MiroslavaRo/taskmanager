import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const ManageTasks = () => {

  const [allTasks, setAllTasks] = useState([]);

  const [tabs, setTabs] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const navigate = useNavigate();
  const getAllTasks = async () => {
    try {
      const res = await axiosInstance.get(API_PATHS.TASKS.GET_ALL_TASKS, {
        params: {
          status: filterStatus === "All" ? "" : filterStatus,
        },
      });

      setAllTasks(res.data?.tasks?.length > 0 ? res.data.tasks : []);


    } catch (error) {
      console.error("Erro fetching users", error);
    }
  }

  const handleClick = (taskData) =>
    navigate(`/admin/create - task`, {
      state: { taskId: taskData._id }
    })

  useEffect(() => {
    getAllTasks(filterStatus);
    return () => { };
  }, [filterStatus]);


  return <DashboardLayout activeMenu="Manage Tasks">
    Manage Tasks
  </DashboardLayout >;

}
export default ManageTasks
